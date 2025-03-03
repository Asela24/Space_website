import './Button.sass'

export const Button = ({label, variant, size = 'medium'}) => {
    return (
        <button className={`button button--${variant} button--${size}`}>
            {label}
        </button>
    )
}