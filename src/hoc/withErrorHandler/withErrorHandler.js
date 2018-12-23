import React, {Component} from 'react';
import Modal from '../../components/UI/Modal/Modal';

const withErrorHandler = (WrapperComponent, axios) => {
    return class extends Component {
        state = {
            error: null
        }
        componentDidMount() {
            axios.interceptors.request.use(req => {
                this.setState({error:null})
            });
            axios.interceptors.response.use(null, error => {
                this.setState({error:error})
            })
        }
        
        errorConfirmHandler = () => {
            this.setState({error:null});
        }

        render() {
            return (
                <>
                    <Modal 
                        clicked={this.errorConfirmHandler}
                        show={this.state.error}>
                        {this.state.error ? this.state.error.message : null}
                    </Modal>
                    <WrappedComponent {...this.props} />
                </>
            );
        }
    }
}

export default withErrorHandler;