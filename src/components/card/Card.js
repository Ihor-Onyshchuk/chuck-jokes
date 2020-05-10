import React from 'react';
import cx from 'classnames';
import T from 'prop-types';

import Avatar from '../avatar/Avatar';
import './Card.scss';

const Card = ({
  joke: {id, value, updatedAt, category, url},
  inFavouriteList,
  isFavourite,
  className = 'mb-3',
}) => (
  <div
    className={cx(
      'main-card border-0',
      {'rounded-sm': inFavouriteList},
      className
    )}
  >
    <div className="card-header bg-transparent text-right border-0 pb-0">
      <span className={`icon-heart${isFavourite ? '-fill' : ''} text-danger`} />
    </div>
    <div className="card-body px-3 pt-2 pb-3">
      <div className="d-flex flex-grow-1">
        <div className="flex-shrink-0 mr-3">
          <Avatar />
        </div>
        <div className="flex-grow-1">
          <div className="card-title fz-10 lh-14 fw-500">
            <span className="text-muted">ID: </span>
            <a href={url}>{id}</a>
          </div>
          <p
            className={`card-text ${inFavouriteList ? 'fz-14 lh-20' : 'fz-18'}`}
          >
            {value}
          </p>
          <p className="text-muted fz-10 lh-14 mb-2">
            Last update: {updatedAt}
          </p>
          {category && (
            <div className="btn-sm category-btn card-category fz-10 lh-14">
              {category}
            </div>
          )}
        </div>
      </div>
    </div>
  </div>
);

Card.propTypes = {
  joke: T.object.isRequired,
  isFavourite: T.bool,
  inFavouriteList: T.bool,
  className: T.string,
};

export default Card;
