import React from 'react'
import { FlyerList } from '../DumbComponents/FlyerList'
import { connect } from 'react-redux'
import { fetchDataAsArray } from '../models'
import { NotificationContainer, NotificationManager } from 'react-notifications'
import { FormControl } from 'react-bootstrap';
import { FaSearch } from 'react-icons/lib/fa'

class FlyerListContainerPage extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      flyers: []
    }
  }

  componentWillMount () {
    const that = this;

    fetchDataAsArray('events')
    .then(function(events){
        var newFlyersList = events
        that.setState({
            flyers: newFlyersList
        })
    })
    .catch(function(error){
        NotificationManager.error('Something is wrong', 'Opps!', 2222);
    })
  }

  render () {
    return (
        <div>
          <div className='container'>
            <FaSearch />
            <FormControl type="text"
                   placeholder="Search For Flyers"/>
         </div>
         <p></p>
            <FlyerList flyers={this.state.flyers}/>
            <NotificationContainer/>
        </div>
    )
  }
}

const FlyerListContainer = connect()(FlyerListContainerPage)

export { FlyerListContainer }
