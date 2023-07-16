# Add the bucket as a CDN backend
resource "google_compute_backend_bucket" "homepage_static_site" {
  provider    = google
  name        = "homepage-static-site-backend"
  description = "Contains files needed by the website"
  bucket_name = google_storage_bucket.oskar_westmeijer_homepage_static_content.name

  enable_cdn = true
  cdn_policy {
    max_ttl     = 0
    default_ttl = 0
    client_ttl  = 0
  }
}

resource "google_compute_url_map" "homepage_http" {
  name            = "homepage-url-map-http"
  description     = "Web HTTP load balancer"
  default_service = google_compute_backend_bucket.homepage_static_site.self_link
}

resource "google_compute_global_forwarding_rule" "homepage_http" {
  name                  = "homepage-forwarding-rule-http"
  load_balancing_scheme = "EXTERNAL"
  ip_address            = google_compute_global_address.external_ip.address
  ip_protocol           = "TCP"
  target                = google_compute_target_http_proxy.homepage_http.id
  port_range            = "80"
}

resource "google_compute_target_http_proxy" "homepage_http" {
  name        = "homepage-target-proxy-http"
  description = "HTTP target proxy"
  url_map     = google_compute_url_map.homepage_http.id
}