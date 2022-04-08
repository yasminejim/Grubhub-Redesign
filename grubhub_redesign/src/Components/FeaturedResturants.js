import React from 'react'
import restuarntsJson from '../test.json'

class FeatureResturant extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchCategory: '',
            allResturants: [],
            filteredResturants: [],
        };
    }

    componentDidMount() {
        //fetch method 
        this.setState({
            allResturants: restuarntsJson,
            filteredResturants: restuarntsJson,
        })
    }
    
    filterByCategory = (event) => {
        const currentCategory = this.state.searchCategory
        if (currentCategory == "") {
            return
        }

        const copyResturants = [...this.state.allResturants]
        const filteredResults = copyResturants.filter((restuarnt) => restuarnt.cuisine == currentCategory)

        this.setState({
            filteredResults
        })

    }

    render() {
        return ( <div>
            </div> 
        );
    }
}

export default FeatureResturant;