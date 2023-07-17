resource "google_compute_network" "homepage_vpc" {
  name                    = "homepage-vpc"
  auto_create_subnetworks = false
  routing_mode            = "REGIONAL"
}

resource "google_compute_subnetwork" "default" {
  name                       = "backend-subnet"
  ip_cidr_range              = "10.1.2.0/24"
  network                    = google_compute_network.homepage_vpc.id
  private_ipv6_google_access = "DISABLE_GOOGLE_ACCESS"
  purpose                    = "PRIVATE"
  region                     = "us-west1"
  stack_type                 = "IPV4_ONLY"
}

resource "google_compute_subnetwork" "proxy_only" {
  name          = "proxy-only-subnet"
  ip_cidr_range = "10.129.0.0/23"
  network       = google_compute_network.homepage_vpc.id
  purpose       = "REGIONAL_MANAGED_PROXY"
  region        = "us-west1"
  role          = "ACTIVE"
}
