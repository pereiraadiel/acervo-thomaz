const useLoadingAtom = (variant: string, position: string) => {
	const iconSize = variant === "small" ? 24 : variant === "large" ? 64 : 48;
  const positionStyle =
    position === "center" ? "center" : position === "left" ? "flex-start" : "flex-end";

	return {
		iconSize,
		positionStyle,
	}
}

export { useLoadingAtom };