import clsx from 'clsx';

export default function Input({label, error, ...other}: {label: string, error?: boolean, [other: string]: any}) {
    return (
        <label
            className={
                clsx('input', {
                    input_error: error
                })
            }
        >
            <span className='input__label'>
                {label}
                {error &&
                    <span> - Заполните поле</span>
                }
            </span>
            <input
                className='input__control'
                {...other}
            />
        </label>
    )
}