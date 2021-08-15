import clsx from "clsx";

type Props = {
    onChange?: any;
    currentRating: number;
};

export default function Rating({onChange, currentRating}: Props) {
    const maxRating = 5;
    const ratings = [];

    for (let i = 0; i < maxRating; i++)
        ratings.push(i);

    return (
      <div className='rating'>
          <div className='rating__label'>
              Рейтинг
          </div>
          <div className='rating__control'>
              {ratings.map(
                  rating =>
                      <button
                          disabled={!onChange}
                          key={rating}
                          type='button'
                          className={clsx('rating__star icon icon_star', {
                              rating__star_active: rating <= currentRating
                          })}
                          onClick={() => onChange(rating)}
                      />
              )}
          </div>
      </div>
    );
}