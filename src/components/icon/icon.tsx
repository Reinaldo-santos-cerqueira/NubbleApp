import React from 'react';
import { EyeOff } from '../../assets/icons/eyeOff';
import { EyeOn } from '../../assets/icons/eyeOn';
import { ThemeColors } from '../../theme/theme';
import { useAppTheme } from '../../hooks/useAppTheme';

export interface IconBase {
	color?: string, 
    size?: number 
}
interface Props {
    name: IconName,
	color?: ThemeColors,
	size?: number
}

export function Icon({name, color = 'backgroundContranst',size}: Props) {
	const {colors} = useAppTheme();
	const SvgIcon = iconRegistry[name];
	return <SvgIcon color={colors[color]} size={size}/>;
}

const iconRegistry = {
	eyeOn: EyeOn,
	eyeOff: EyeOff
};

type IconType = typeof iconRegistry;

type IconName = keyof IconType;