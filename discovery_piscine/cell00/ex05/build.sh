
# Check if no arguments were supplied
if [ $# -eq 0 ]; then
    echo "No arguments supplied"
    exit 1
fi

# Loop through all arguments and create directories with "ex" prepended
for arg in "$@"; do
    mkdir -p "ex$arg"
done