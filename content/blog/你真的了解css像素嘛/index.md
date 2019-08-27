---
title: '你真的了解CSS像素么'
tags: ["css"]
published: true
date: '2018-12-20'
---

在日常开发中，px一定是大家接触过最多的css单位，但是你真的了解px嘛？1px在屏幕中到底是多大呢？另外不知道大家有没有过下面这些疑惑:
* 为什么一个元素在pc上和移动端的物理尺寸不一样，但是两者的视觉效果上却差不多呢？
* 改变屏幕的分辨率时，屏幕上显示的内容大小为什么会跟着改变？
* 缩放浏览器时，浏览器中的内容的大小为什么会跟着改变？

想回答以上问题，我们就要知道css中的px到底指的是什么？

## 什么是css px?
在回答什么是css px之前，我们先要了解两个概念——设备像素和参考像素。
### 设备像素(device pixel)
来看[这张](https://zh.wikipedia.org/wiki/%E6%B6%B2%E6%99%B6%E6%98%BE%E7%A4%BA%E5%99%A8)显示器屏幕的放大图。
![device pixel](https://user-gold-cdn.xitu.io/2018/9/8/165b6483fdc7b980?w=460&h=407&f=jpeg&s=86089)

从图中可以看到，显示器屏幕实际上是由一个一个"点"组成的（每个"点"又包含3个单位，也称三元素组)，**这些"点"就是设备像素**。

需要注意的是,device pixel实际是可以"变化"的，当你降低设备分辨率时，一个"点"就需要更多的三元素组来组成，此时"点"的物理尺寸就增大了。以下是维基百科关于这点的说明，想了解更多，请点击[这里查看](https://zh.wikipedia.org/wiki/%E5%83%8F%E7%B4%A0)。
> 因为多数计算机显示屏的分辨率可以通过计算机的操作系统来调节，显示屏像素的分辨率可能不是一个绝对的衡量标准。<br/>
现代液晶显示屏按设计有一个原始分辨率，它代表像素和三元素组之间的完美匹配。<br/>
对于该显示器，原始分辨率能够产生最精细的视频。但是因为用户可以调整分辨率，显示器必须能够显示其它分辨率。非原始分辨率必须通过在液晶显示屏上拟合重新取样来实现，要使用插值算法。这经常会使显示屏看起来破碎或模糊。例如，原始分辨率为1280×1024的显示器在分辨率为1280×1024时看起来最好，也可以通过用几个物理三元素组来表示一个像素以显示800×600，但可能无法完全显示1600×1200的分辨率，因为物理三元素组不够。

由于不同的设备屏幕分辨率和尺寸可能不一样，所以设备上物理像素的大小也就不一样。但是对于css来说，它希望在所有的设备上元素的显示效果**看起来**都是差不多的。

那怎么才能让同一元素在不同的设备上显示的效果差不多呢？w3c提出了一个概念，也就是下面将要介绍的参考像素(reference pixel)。
### 参考像素(reference pixel)


![近大远小](https://user-gold-cdn.xitu.io/2018/9/8/165b6ef1319ba202?w=303&h=166&f=jpeg&s=8481)
从上面这幅图可以看到，近处的铁轨看起来很大，而远处的铁轨看起来很小。这是由于我们眼睛的视角所产生"近大远小"的透视现象所造成的。

那设想一下，如果远处的铁轨比近处的铁轨尺寸大一些，是不是我们看远处的铁轨就和看近处的差不多大了呢。

css参考像素(reference pixel)就是应用了这个原理，[w3c](https://www.w3.org/TR/CSS2/syndata.html#length-units)是这样定义参考像素的
> The reference pixel is the visual angle of one pixel on a device with a pixel density of 96dpi and a distance from the reader of an arm's length. For a nominal arm's length of 28 inches, the visual angle is therefore about 0.0213 degrees. 


![reference pixel图示](https://user-gold-cdn.xitu.io/2018/9/8/165b730f0c3f216a?w=327&h=235&f=png&s=10407)

注意了，**css参考像素它是一个visual angle，即一个约等于0.0213度的角**。当设备的典型观看距离越远时，参考像素就越大（注意这里的大，不是指视角变大，而是角度对应在屏幕上的尺寸变大）。

在介绍完设备像素和参考像素之后，下面该轮到今天的主角——css像素出场了。

### css像素(css pixel)
顾名思义，css pixel是css样式表语言中用来表示长度的一个单位，类似的单位还有pt,in,cm等。像pt,in,cm等都是物理单位，相对好理解，而px则有点抽象。

一个px到底是多大? 它又和pt,in,cm的长度等有什么联系呢？这些都是亟待我们思考的问题。

在思考这些问题之前，先看下面这段w3c规范
> For a CSS device, these dimensions（指in,pt,px等length单位） are either anchored by relating the physical units to their physical measurements, or by relating the pixel unit to the reference pixel. For print media and similar high-resolution devices, the anchor unit should be one of the standard physical units (inches, centimeters, etc). For lower-resolution devices, and devices with unusual viewing distances, it is recommended instead that the anchor unit be the pixel unit.For such devices it is recommended that the pixel unit refer to the whole number of device pixels that best approximates the reference pixel.

对于css length单位（当然也包括px）来说，不同的分辨率设备对它们的影响是不同的。

对高分辨率显示设备（如打印机），length的anchor unit(可以理解为基准单位)推荐使用基于物理测量的inches,centimeters等。而对于低分辨率的设备(如电脑显示器)，anchor unit推荐使用pixel单位。下面具体来讲讲这两者的区别：

#### 高分辨率设备（high-resolution devices）
关于分辨率的东西这里不多讲，不熟悉的同学可以点击[这里](https://zh.wikipedia.org/wiki/%E5%88%86%E8%BE%A8%E7%8E%87)查看。我们之前说了，对于高分辨的显示设备，基准单位是基于物理测量的inches, centimeters。

基于物理测量是什么意思呢？就是它实际的物理长度。如单位cm， 用css设置一个盒子的宽度为1cm,那它就等于物理上的1cm，你用尺子去量，它就是1cm。

那现在问题来了，px呢？px怎么去基于物理测量呢？

这个问题我们结合[w3c](https://www.w3.org/TR/CSS2/syndata.html#length-units)和[mdn](https://developer.mozilla.org/en-US/docs/Web/CSS/length)，就能得到解答:
> Alternatively if the anchor unit is a physical unit, the pixel unit might not map to a whole number of device pixels.

> However, for printers and high-resolution screens, one CSS pixel implies multiple device pixels. 1px = 1/96th of 1in.

现在知道了，在高分辨率设备下，1px就等于96分之一英寸，约等于0.2646mm。

#### 低分辨率设备（low-resolution devices）

对于低分辨率设备来说，anchor unit是基于pixel unit的，那pixel unit又是什么呢？如果有仔细看过css像素那小节里引用w3c的那段说明的话，答案你应该已经知道了。为了说明方便，还是把那句最重要的话再写一遍。
> For such devices it is recommended that the pixel unit refer to the whole number of device pixels that best approximates the reference pixel.

**这句话非常重要！！！**

可以说理解了这句话，你就基本上理解了什么是css像素。这里为了照顾部分英语不好的同学，我把这句话翻译一遍
> 对于这样的设备（这里指低分辨率设备），建议像素单位参考最接近参考像素的整数个设备像素。

我们举个例子来说明一下，一个分辨率为1680 * 1050的22寸电脑显示器。对于电脑显示器来说，它的参考像素约为0.26mm(这个值的大小由设备的典型视距决定，出厂时已经确定)。

确定了参考像素之后，再来计算设备像素。通过分辨率和尺寸，计算出该显示器的[ppi](https://zh.wikipedia.org/wiki/%E6%AF%8F%E8%8B%B1%E5%AF%B8%E5%83%8F%E7%B4%A0)
为90.05，此时一个设备像素的值就等于0.28mm。

**对比这两个像素值之后发现，一个设备像素的值是最接近参考像素的**。所以对于这个设备来说，一个像素单位(1px)就等于一个设备像素。

到这里，相信大家对css px是什么应该有了一个基本的概念。下面我们通过分析文章开始时提出的几个问题，来进一步加深对css px的印象。
# 分析问题
**（1）为什么一个元素在pc上和移动端的物理尺寸不一样，但是两者的视觉效果上却差不多呢？**

因为css px是基于参考像素确定的，而参考像素就是为了让同一元素在不同设备上显示效果尽量一致而设计的（对于移动端和pc端来说，参考像素的物理大小肯定不一样，但是显示效果基本是一致的）。所以同一个元素，尽管在pc端和移动端尺寸不一样，但视觉效果却是差不多的。

**（2）当改变屏幕的分辨率时，屏幕上显示的内容大小为什么会跟着改变？**

 我们举一个例子来说明这个问题，还是以上面那个典型的22寸显示器为例：

* 正常分辨率下，即1680 * 1050，此时的ppi是90.05，那一个device pixel的长度就约为0.28mm。这时一个device pixel就约等于一个参考像素对应的大小。如果你用css定义了一个盒子宽为375px，此时你用尺子去屏幕上量，会发现375px盒子的实际宽度是0.28(mm) * 375 ≈ 10.5cm。


* 调整显示器的分辨率为1024 * 640时，此时一个device pixel对应的长度是0.46mm，虽然它和参考像素对应的大小有差距，但是没办法，你还得使用它，毕竟它现在就是最接近参考像素大小的device pixel了。上面那个375px的盒子，此时的实际宽度则为0.46 * 375 ≈ 17.4cm。所以降低分辨率之后，相同的内容会显得大了。

* 调整显示器的分辨率为1920 * 1080，此时一个device pixel对应的长度是0.25mm，此时375px的盒子实际宽度是0.25 * 375 ≈ 9.3cm，所以提高分辨率后，内容自然就变小了。

**（3）当你缩放浏览器大小时，浏览器中的内容的大小会跟着改变？**

这个现象，ppk在之前的[一篇文章](https://www.quirksmode.org/mobile/viewports.html)里提到过。缩放浏览器时，也就相当于改变了浏览器的分辨率，所以这个问题和第2个一样，这里也就不多赘述了。
## 总结
1.对于低分辨率设备（绝大部分显示器，手机屏幕），1个css像素相当于最接近参考像素的整数个设备像素。

2.对于高分辨率设备(打印机)来说，1个css像素就是96分之一英寸。

3.参考像素(reference pixel)就是从一臂之遥看解析度为96DPI的设备时，1个设备像素的视角（但为了方便计算，都把这个视角转换为其在显示设备上对应的大小）。

3.在低分辨率设备中，pt,cm,in等单位的大小不等于它的物理大小，它们的大小需要px（这时等于xx个设备像素）来进行转换，如1in此时等于96个设备像素的大小(即96px)。

4.在高分辨率设备中，1px也不等于xx个设备像素，px的大小就等于固定值。

5.设备像素(device pixel)不是固定不变的，除非你的设备不能调整分辨率。
## 参考文献
[A tale of two viewports — part one
](https://www.quirksmode.org/mobile/viewports.html)

[w3c css规范](https://www.w3.org/TR/CSS2/syndata.html#length-units)

[CSS像素、物理像素、逻辑像素、设备像素比、PPI、Viewport](https://github.com/jawil/blog/issues/21)

[wiki pixel](https://en.wikipedia.org/wiki/Pixel)

[wiki 液晶显示器](https://zh.wikipedia.org/wiki/%E6%B6%B2%E6%99%B6%E6%98%BE%E7%A4%BA%E5%99%A8)

[移动端高清、多屏适配方案](https://div.io/topic/1092)

[rethinking the pixel it‘s all relative now](https://creativepro.com/rethinking-the-pixel-it-s-all-relative-now/)

[A Pixel Identity Crisis](https://alistapart.com/article/a-pixel-identity-crisis#section2)