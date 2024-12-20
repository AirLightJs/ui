import { AirColorType } from "../types/color.type";
import { AirColorSet } from "../sets/color.set";
import { AirColorHoverSet } from "../sets/color-hover.set";
import { AirSizeType } from "../types/size.type";
import { AirSizeSet } from "../sets/size.set";

export const extractKey = (dest: any, source: any, defaultValue?: any): any => {
  for (const type in source) {
    if (isEnabled(dest[type])) {
      return type;
    }
  }
  return defaultValue;
};

export const extractValue = (dest: any, source: any, defaultValue?: any): [] => {
  for (const type in source) {
    if (isEnabled(dest[type])) {
      return source[type].split(" ");
    }
  }
  return defaultValue ? source[defaultValue].split(" ") : [];
};

export const extractColorType = (source: any, defaultValue?: AirColorType | string): AirColorType | string => {
  for (const color in AirColorSet) {
    if (isEnabled(source[color])) {
      return color;
    }
  }

  return defaultValue;
};

export const extractColorHoverType = (source: any, defaultValue?: AirColorType | string): AirColorType | string => {
  for (const color in AirColorHoverSet) {
    if (isEnabled(source[color])) {
      return color;
    }
  }

  return defaultValue;
};

export const extractColor = (source: any, defaultValue?: AirColorType | string): string => {
  for (const color in AirColorSet) {
    if (isEnabled(source[color])) {
      return AirColorSet[color];
    }
  }
  return defaultValue ? AirColorSet[defaultValue] : null;
};

export const extractColorHover = (source: any, defaultValue?: AirColorType | string): string => {
  for (const color in AirColorHoverSet) {
    if (isEnabled(source[color])) {
      return AirColorHoverSet[color];
    }
  }

  let _defaultValue = defaultValue;

  if (!_defaultValue.startsWith("hover")) {
    _defaultValue = "hover" + String(defaultValue).charAt(0).toUpperCase() + String(defaultValue).slice(1);
  }
  return _defaultValue ? AirColorHoverSet[_defaultValue] : null;
};

export const extractSize = (source: any, defaultValue?: AirSizeType | string): string => {
  for (const size in AirSizeSet) {
    if (isEnabled(source[size])) {
      return AirSizeSet[size];
    }
  }
  return defaultValue ? AirSizeSet[defaultValue] : null;
};

export const extractSizeType = (source: any, defaultValue?: AirSizeType): AirSizeType => {
  for (const size in AirSizeSet) {
    if (isEnabled(source[size])) {
      return (size as AirSizeType);
    }
  }
  return defaultValue;
};

export const isEnabled = (val: any): boolean => {
  if (typeof val === "boolean") {
    return val;
  }
  if (val === "false") {
    return false;
  }
  return val === "true" || val === "";
};
