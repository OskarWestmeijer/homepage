#!/bin/bash

echo 'Start deploy homepage script.'

compose_down="docker-compose down"
list_images="docker images"
rm_latest_homepage="docker image rm oskarwestmeijer/homepage:latest"
compose_up="docker-compose up -d"

$compose_down
$list_images
$rm_latest_homepage
$compose_up

echo 'Finish deploy homepage script.'
