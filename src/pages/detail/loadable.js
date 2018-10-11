import React from 'react'
import Loadable from 'react-loadable';
// import Loading from './my-loading-component';

const LoadableComponent = Loadable({
    loader: () => import('./'),
    // loading: Loading,
    loading(){
        return <div>正在加载</div>
    }
});

export default () => <LoadableComponent/>;