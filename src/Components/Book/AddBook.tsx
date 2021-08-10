import Input from '../Common/Input';
import InputFile from "../Common/InputFile";

export default function AddBook() {
    return (
        <form className='page__wrapper form'>
            <div className='container'>
                <div className='row row_stretch'>
                    <div className='col col_4 form__file'>
                        <InputFile/>
                    </div>
                    <div className='col col_wide'>
                        <div className='form__input'>
                            <Input
                                label='Название'
                                type='number'
                                min={2}
                            />
                        </div>
                        <div className='form__input'>
                            <Input
                                label='Описание'
                                type='number'
                                min={2}
                            />
                        </div>
                        <div className='form__input'>
                            <Input
                                label='Автор'
                                type='number'
                                min={2}
                            />
                        </div>
                        <div className='form__input'>
                            <Input
                                label='Издательство'
                                type='number'
                                min={2}
                            />
                        </div>
                        <div className='form__input'>
                            <Input
                                label='Код ISBN'
                                type='number'
                                min={2}
                            />
                        </div>
                        <div className='form__input'>
                            <Input
                                label='Год издания'
                                type='number'
                                min={2}
                            />
                        </div>
                        <div className='form__input'>
                            <Input
                                label='Количество страниц'
                                type='number'
                                min={2}
                            />
                        </div>
                        <div className='form__input'>
                            <Input
                                label='Рейтинг'
                                type='number'
                                min={2}
                            />
                        </div>
                        <div className='form__input'>
                            <Input
                                label='Отзывы тех, кто прочитал'
                                type='number'
                                min={2}
                            />
                        </div>
                        <div className='form__input'>
                            <Input
                                label='Личные заметки по книге'
                                type='number'
                                min={2}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </form>
    )
}