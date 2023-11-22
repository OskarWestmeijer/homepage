#!/bin/bash

# Function to execute commands with logging
execute_command() {
    local command="$1"
    echo "Executing: $command"
    if eval "$command"; then
        echo "Command executed successfully"
    else
        echo "Error executing command: $command" >&2
        exit 1
    fi
}

# Start deploy homepage script
echo 'Start deploy homepage script.'

# Commands to execute
compose_down="docker compose down"
list_images="docker images"
rm_latest_homepage="docker image rm oskarwestmeijer/homepage:latest"
compose_up="docker compose up -d"

# Execute the commands
execute_command "$compose_down"
execute_command "$list_images"
execute_command "$rm_latest_homepage"
execute_command "$compose_up"

# Finish deploy homepage script
echo 'Finish deploy homepage script.'
