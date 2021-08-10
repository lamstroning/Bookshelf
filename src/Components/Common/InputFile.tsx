export default function InputFile() {
    return (
        <label className='input-file'>
            <span className='input-file__label'>
                Обложка
            </span>
            <i className='input-file__icon icon icon_upload'/>
            <span className='input-file__label'>
                Выберите файл
            </span>
            <input type='file'/>
        </label>
    )
}