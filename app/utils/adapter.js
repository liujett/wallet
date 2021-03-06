/**
 * 屏幕工具类
 * ui设计基准,iphone 6
 * width:750
 * height:1334
 */

/*
 设备的像素密度，例如：
 PixelRatio.get() === 1          mdpi Android 设备 (160 dpi)
 PixelRatio.get() === 1.5        hdpi Android 设备 (240 dpi)
 PixelRatio.get() === 2          iPhone 4, 4S,iPhone 5, 5c, 5s,iPhone 6,xhdpi Android 设备 (320 dpi)
 PixelRatio.get() === 3          iPhone 6 plus , xxhdpi Android 设备 (480 dpi)
 PixelRatio.get() === 3.5        Nexus 6       */




import { Dimensions, PixelRatio } from 'react-native'

const devicesPR = null
export function getPixelRatio () {
  devicesPR = PixelRatio.get() // 设备的像素密度
}
getPixelRatio()

export const deviceWidth = Dimensions.get('window').width // 设备的宽度  dp
export const deviceHeight = Dimensions.get('window').height // 设备的高度
let fontScale = PixelRatio.getFontScale() // 返回字体大小缩放比例

// px转换成dp
const w2 = 750 / devicesPR //inch  750
const h2 = 1334 / devicesPR // 1334
const scale = Math.max(deviceHeight / h2, deviceWidth / w2) // 获取缩放比例
/**
 * 设置text为sp
 * @param size sp
 * return number dp
 */
// 字体缩放
export function setScaleText (size: number) {
  size = Math.round(size * scale + 0.5)
  return size / devicesPR
}

// 宽 高 尺寸缩放
export function scaleSize (size: number) {
  size = Math.round(size * scale + 0.5)
  return size / devicesPR
}
