type Props = {
    value: any,
    onChange: any,
    [props: string]: any
}

export default function InputFile({value, onChange, ...props}: Props) {
    return (
        <label className='input-file'>
            <span className='input-file__label'>
                Обложка
            </span>
            <i className='input-file__icon icon icon_upload'/>
            <span className='input-file__label'>
                Выберите файл
            </span>
            <input
                {...props}
                onChange={onChange}
                type='file'
            />
        </label>
    )
}