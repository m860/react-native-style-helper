import {
	PixelRatio
	,Dimensions
} from "react-native";

const deviceSize=Dimensions.get("window");

const density=PixelRatio.get();

/*
 * 设置margin，参数和css一样。
 * 一个参数则设置top=right=bottom=left=value1
 * 两个参数则设置top=bottom=value1,left=right=value2
 * 三个参数设置top=value1,right=value2,bottom=value3,left=null
 * 四个参数设置top=value1,right=value2,bottom=value3,left=value4
 * */
export function margin(...args) {
	let result = {};
	if (args.length === 0) {
		throw new Error(`margin miss parameter`);
	}
	if (args.length === 1) {
		result.marginTop = result.marginRight = result.marginBottom = result.marginLeft = args[0];
	}
	else if (args.length === 2) {
		result.marginTop = result.marginBottom = args[0];
		result.marginLeft = result.marginRight = args[1];
	}
	else if (args.length === 3) {
		result.marginTop = args[0];
		result.marginRight = args[1];
		result.marginBottom = args[2];
	}
	else {
		result.marginTop = args[0];
		result.marginRight = args[1];
		result.marginBottom = args[2];
		result.marginLeft = args[3];
	}
	return result;
}

export function padding(...args) {
	let result = {};
	if (args.length === 0) {
		throw new Error(`padding miss parameter`);
	}
	if (args.length === 1) {
		result.paddingTop = result.paddingRight = result.paddingBottom = result.paddingLeft = args[0];
	}
	else if (args.length === 2) {
		result.paddingTop = result.paddingBottom = args[0];
		result.paddingLeft = result.paddingRight = args[1];
	}
	else if (args.length === 3) {
		result.paddingTop = args[0];
		result.paddingRight = args[1];
		result.paddingBottom = args[2];
	}
	else {
		result.paddingTop = args[0];
		result.paddingRight = args[1];
		result.paddingBottom = args[2];
		result.paddingLeft = args[3];
	}
	return result;
}

/**
 * shadow helper
 * @param {string} [color='white'] - the color must be a valid web color. such as #fff,white,rgba(0,0,0,0)
 * @param {number} [opacity=0.2] - range is 0 to 1
 * @param {number} [radius=1]
 * @param {object} offset
 * @param {number} [offset.width=0]
 * @param {number} [offset.height=0]
 * @returns {object}
 * */
export function shadow(color = "#000000", opacity = 0.2, radius = 1, offset = {
	width: 0,
	height: 2
}) {
	let value = {
		shadowColor: color,
		shadowOpacity: opacity,
		shadowRadius: radius,
		shadowOffset: {
			...offset
		}
	};
	return value;
}

export function getResponsiveValue(value:Number,designDensity:Number=2,designScreenWidth:Number=375){
	let rate=deviceSize.width/designScreenWidth;
	//let realValue=(value/designDensity)*density;
	return PixelRatio.roundToNearestPixel(value*rate);
}

export function getResponsiveFontSize(value:Number,designDensity:Number=2){
	switch (density){
		case 1:
			return Math.round(value-1);
		case 3:
			return Math.round(value+1);
		default:
			return Math.round(value);
	}
}