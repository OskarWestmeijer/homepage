resource "google_storage_bucket" "oskar_westmeijer_homepage_static_content" {
  name          = "oskar_westmeijer_homepage_static_content"
  location      = var.project_region
  storage_class = "STANDARD"

  website {
    main_page_suffix = "index.html"
    not_found_page   = "404.html"
  }

  uniform_bucket_level_access = true
}

# Make bucket public
resource "google_storage_bucket_iam_member" "public_content" {
  provider = google
  bucket   = google_storage_bucket.oskar_westmeijer_homepage_static_content.name
  role     = "roles/storage.objectViewer"
  member   = "allUsers"
}

output "bucket_metadata" {
  value = google_storage_bucket.oskar_westmeijer_homepage_static_content
}
