cp *.json bin/
cp *.html bin/
cp *.png bin/
cp *.css bin/
echo "Copied files over to bin/"
zip -r tsupextension.zip bin/
echo "Created zip archive tsupextension.zip"