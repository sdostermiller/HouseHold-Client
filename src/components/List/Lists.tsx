import React from 'react';
import OurLists from './OurLists';
import ListCreate from './ListCreate';

interface ItemsProps {
    sessionToken: string | null
}

export default class Lists extends React.Component <ItemsProps>{



render() {
    return (
        <div>
            <div className="p-grid">
                <div className="p-col-12">
                    <h1>Our Lists</h1>
                </div>
                <div className="p-col-8">
                    <OurLists sessionToken={this.props.sessionToken} />
                </div>
                <div className="p-col-4">
                    <ListCreate sessionToken={this.props.sessionToken} />
                </div>
            </div>
         

        </div>
    )
}
}