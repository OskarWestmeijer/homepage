resource "google_storage_bucket" "oskar_westmeijer_homepage_static_content" {
  name          = "oskar_westmeijer_homepage_static_content"
  location      = var.project_region
  storage_class = "STANDARD"

  uniform_bucket_level_access = true
}

resource "google_storage_bucket_object" "test_sample_file" {
  name         = "sample_file.txt"
  source       = "sample_file.txt"
  content_type = "text/plain"
  bucket       = google_storage_bucket.oskar_westmeijer_homepage_static_content.id
}

# Make bucket public
resource "google_storage_bucket_iam_member" "public_content" {
  provider = google
  bucket   = google_storage_bucket.oskar_westmeijer_homepage_static_content.name
  role     = "roles/storage.objectViewer"
  member   = "allUsers"
}