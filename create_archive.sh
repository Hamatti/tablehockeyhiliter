mkdir -p bin
rm -f bin/*
cp *.json *.html *.png *.css *.js bin/
echo "Copied files over to bin/"
zip -r tsupextension.zip bin/
echo "Created zip archive tsupextension.zip"
