resource "google_storage_bucket" "oskar_westmeijer_homepage_static_content" {
  name          = "oskar_westmeijer_homepage_static_content"
  location      = var.project_region
  storage_class = "STANDARD"

  uniform_bucket_level_access = true
}