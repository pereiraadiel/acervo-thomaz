import { useEffect, forwardRef } from "react";
import { useLabeledInputAtom } from "./hook";
import { LabeledInputAtomProps } from "./interface";
import { LabeledInputAtomView } from "./view";
import { KeyboardTypeOptions, TextInput } from "react-native";

const LabeledInputAtom = forwardRef<React.ElementRef<typeof TextInput>, LabeledInputAtomProps>(({
    className,
    label,
    variant = 'name',
    error,
    ...rest
}, ref) => {
    
    const { Icon, color, setError } = useLabeledInputAtom(variant)

    useEffect(() => {
        setError(error);
    }, [error])

  const keyboardType: KeyboardTypeOptions = 
        variant === 'email' || variant === 'username' 
            ? 'email-address' 
            :	variant === 'code' 
                ? 'number-pad'
                : 'default'


    const methods = {
        label,
        className,
        Icon,
        color,
        error,
        keyboardType,
        variant,
				ref,
        ...rest
    }

    return <LabeledInputAtomView {...methods} />;
})

export { LabeledInputAtom }