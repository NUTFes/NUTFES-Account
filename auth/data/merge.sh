#!/bin/bash

cd "$(dirname "$0")"

# Merge export.json and import.json into out.json
jq 'map(with_entries(select(.value | type != "array")))' import.json > out-elements.json
jq -s '[.[][] | .users] | add | unique' export.json import.json > out-users.json
jq -s '[.[][] | .groups] | add | unique' export.json import.json > out-groups.json
jq -s '[.[][] | .clients] | add | unique' export.json import.json > out-clients.json

# Generate out json
cat << EOF > out-array.json
[
  {
    "users": $(if [ -s out-users.json ]; then cat out-users.json; else echo "[]" ; fi),
    "groups": $(if [ -s out-groups.json ]; then cat out-groups.json; else echo "[]" ; fi),
    "clients": $(if [ -s out-clients.json ]; then cat out-clients.json; else echo "[]" ; fi)
  }
]
EOF

jq -s '[[.[][] ] | add]' out-elements.json out-array.json > out.json
jq -s '[[.[][] ] | add]' export.json out.json > merged.json
