/**
 * @author Lee Tae Su
 * @project todo-list
 * @version 1.0
 * @since 2019-06-17
 */
import React, {Component} from 'react';
import styles from './PageTemplate.scss';
import classnames from 'classnames/bind';

const cx = classnames.bind(styles);

const PageTemplate = ({children}) => {
    return (
        <div className={cx('page-template')}>
            <h1>일정관리</h1>
            <div className={cx('content')}>
                {children}
            </div>
        </div>
    )
}

export default PageTemplate;