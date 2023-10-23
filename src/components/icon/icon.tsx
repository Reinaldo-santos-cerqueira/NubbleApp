import React from 'react';
import { EyeOff } from '../../assets/icons/eyeOff';
import { EyeOn } from '../../assets/icons/eyeOn';

interface Props {
    name: IconName
    color: string,
    size?: number 
}

export function Icon({name,color,size = 20}: Props) {
	const SvgIcon = iconRegistry[name];
	return <SvgIcon color={color} size={size}/>;
}

const iconRegistry = {
	eyeOn: EyeOn,
	eyeOff: EyeOff
};

type IconType = typeof iconRegistry;

type IconName = keyof IconType;