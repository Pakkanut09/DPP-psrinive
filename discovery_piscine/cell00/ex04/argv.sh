
# Loop through all positional arguments
if [ "$#" -eq 0 ]; then
    echo "No arguments supplied"
    exit 1
fi
if [ "$#" -gt 3 ]; then
    echo "Error: Too many arguments. Maximum allowed is 3."
    exit 1
fi
for arg in "$@"; do
    echo "$arg"
done
#if max 3,