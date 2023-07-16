# Reserve an external IP
resource "google_compute_global_address" "external_ip" {
  name         = "homepage-external-lb-ip"
  provider     = google
  address_type = "EXTERNAL"
  ip_version   = "IPV4"
  project      = var.project_id
  description  = "External static IP address for React app"
}

output "external_ip" {
  value       = google_compute_global_address.external_ip.address
  description = "External static IP address for React app"
}

resource "google_compute_network" "homepage_vpc" {
  name                    = "homepage-vpc"
  auto_create_subnetworks = false
}

resource "google_compute_subnetwork" "homepage_subnet" {
  name                     = "homepage-subnet"
  ip_cidr_range            = "10.8.0.0/28"
  region                   = var.project_region
  network                  = google_compute_network.homepage_vpc.id
  private_ip_google_access = true

  secondary_ip_range {
    range_name    = "pod"
    ip_cidr_range = "10.0.16.0/20"
  }

  secondary_ip_range {
    range_name    = "svc"
    ip_cidr_range = "10.0.32.0/20"
  }
}
