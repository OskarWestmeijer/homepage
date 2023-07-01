resource "google_storage_bucket" "static_content" {
  name          = "static_content"
  location      = var.project_region
  storage_class = "STANDARD"

  uniform_bucket_level_access = true
}