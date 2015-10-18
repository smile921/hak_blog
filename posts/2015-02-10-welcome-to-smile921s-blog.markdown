---
title:  Welcome to smile921's blog!
date:   2015-02-11 23:52:38
categories: Demo  
---

TODO

代码高亮

{% highlight ruby %}
# -*-coding:utf-8-*-
file_object = open('oo.txt','r')
headerFiles = open('out.txt','w') 
try:
     #all_the_text = file_object.read( )
	 #读每行
     #list_of_all_the_lines = file_object.readlines( )
     #如果文件是文本文件，还可以直接遍历文件对象获取每行：
	i = 5;	
	for line in file_object:
		#print line
		ii = '%d' %i;
		i = i + 1
		line_alt = ''+ii+'. ['+line.strip()+']()\n'
		headerFiles.write(line_alt)		 
finally:
     file_object.close()
     headerFiles.close()
{% endhighlight %}

TODO

[jekyll-gh]: https://github.com/jekyll/jekyll
[jekyll]:    http://jekyllrb.com
