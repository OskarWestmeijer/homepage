# Reserve an external IP
resource "google_compute_address" "external_ip" {
  name         = "homepage-external-lb-ip"
  address_type = "EXTERNAL"
  project      = var.project_id
  region       = var.project_region
  network_tier = "STANDARD"
  description  = "External static IP address for React app"
}

output "external_ip" {
  value       = google_compute_address.external_ip.address
  description = "External static IP address for React app"
}

resource "google_compute_forwarding_rule" "homepage_http" {
  name                  = "homepage-forwarding-rule-http"
  region                = var.project_region
  depends_on            = [google_compute_subnetwork.proxy_only]

  ip_protocol           = "TCP"
  load_balancing_scheme = "EXTERNAL_MANAGED"
  port_range            = "80"
  target                = google_compute_region_target_http_proxy.homepage_http.id
  network               = google_compute_network.homepage_vpc.id
  ip_address            = google_compute_address.external_ip.address
  network_tier          = "STANDARD"
}

resource "google_compute_region_target_http_proxy" "homepage_http" {
  name        = "homepage-target-proxy-http"
  description = "HTTP target proxy"
  url_map     = google_compute_region_url_map.homepage_http.id
  region      = var.project_region
}


resource "google_compute_region_url_map" "homepage_http" {
  name            = "homepage-url-map-http"
  description     = "Web HTTP load balancer"
  default_service = google_compute_region_backend_service.homepage_static_site.self_link
}

resource "google_compute_region_backend_service" "homepage_static_site" {
  name                  = "homepage-static-site-backend"
  description           = "Contains files needed by the website"
  load_balancing_scheme = "EXTERNAL_MANAGED"
  protocol              = "HTTP"
  region                = var.project_region
}

