export default function Input({label, ...other}: {label: string, [other: string]: any}) {
    return (
        <label className='input'>
            <span className='input__label'>
                {label}
            </span>
            <input
                {...other}
                className='input__control'
            />
        </label>
    )
}