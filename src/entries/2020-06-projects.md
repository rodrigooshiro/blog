[2020-06-07]
So I have been working a lot on my `#machine-learning` project here on github lately. I have finally completed adding the classical examples like regression, classification, dimentionality reduction and series prediction. I just happen to learn a lot about tensorflow, it was fun.

While I was working on my last template about temperature forecasting I realized that to manipulate a lot of data in the browser just to send them back and forth to a backend is not very efficient and it is making the pipelines to run very, very slowly. There is also a problem with nodeJS, as when I tried to load all the 400k original entries directly from a script I created to train the network, there was that classic heap memory limitation that we get whenever we use too much memory. So even if I fix it in the browser, there will be problems in the backend as well.

To address the memory and performance when working with a lot of data, I realized I have to change the approach and start to create some sort of pipeline in the background, and start to use `tf.data.array` to avoid creating memory maps of the entire source and instead to have the array manipulated in chunks. But that can wait, it will be too much work for now.

Now I need to document the template, add some sort of descriptions as for now I just split the training and the pre-trained models in different templates.

About performance, something interesting was the use of datasets, so instead of fitting X,Y training samples againts X,Y validation samples I now fit a set. But anyway, with my aged notebook from 9 years ago it will all be slow anyway....