import React from 'react';
import OurItems from './OurItems';
import ItemCreate from './ItemCreate';

interface ItemsProps {
    sessionToken: string | null
}

export default class Items extends React.Component <ItemsProps>{



render() {
    return (
        <div>
            <div className="p-grid">
                <div className="p-col-12">
                    <h1>Our Items</h1>
                </div>
                <div className="p-col-8">
                    <OurItems sessionToken={this.props.sessionToken} />
                </div>
                <div className="p-col-4">
                    <ItemCreate sessionToken={this.props.sessionToken} />
                </div>
            </div>
         

        </div>
    )
}
}