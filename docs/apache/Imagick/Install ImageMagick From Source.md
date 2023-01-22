Install ImageMagick From Source
===============================

http://patrickdieudonne.com/ImageMagick-6.7.0-2/www/install-source.html
https://gist.github.com/ahmadhasankhan/3d172098a8890f3a9851ced1690d4df6

Remove imagemagick

 	$ sudo apt-get --purge remove imagemagick
	$ sudo apt autoremove

Install Required package:

	sudo apt-get install build-essential 
	sudo apt-get install checkinstall
	sudo apt-get install libgs-dev
	sudo apt-get install ghostscript

	$ wget https://download.imagemagick.org/ImageMagick/download/releases/ImageMagick-6.7.7-10.tar.xz
	$ wget https://download.imagemagick.org/ImageMagick/download/releases/ImageMagick-6.9.12-34.tar.xz

	$ tar -xf ImageMagick-6.9.12-34.tar.xz (ImageMagick 6.7.7-10 2018-09-28 Q16)

	$ cd ImageMagick-6.9.12-34
    
Proceed to instaltion:
	
	$ ./configure --with-gslib=yes
	$ make
	$ sudo make install

You may need to configure the dynamic linker run-time bindings:

	$ sudo ldconfig /user/local/lib
	$ convert -v
	$ identify -version

		Delegates (built-in): fontconfig freetype gslib jbig jng jpeg lcms lzma png ps tiff zlib

	$ apt install libmagickcore-dev libmagickcore-6.q16-3-extra 


## svg support

SVG support is disabled by default due to security concerns as described here. It also explains how you can enable additional formats:

https://docs.nextcloud.com/server/17/admin_manual/configuration_files/previews_configuration.html?highlight=svg#previews-configuration 4,7 k