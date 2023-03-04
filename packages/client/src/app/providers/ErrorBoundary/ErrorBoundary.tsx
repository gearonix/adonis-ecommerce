import { Component, ErrorInfo, ReactNode } from 'react'
import { Nullable } from 'shared/types/common'
import ErrorTemplate from 'app/providers/ErrorBoundary/ui/ErrorTemplate'

interface Props{
    children: ReactNode
}

interface State{
    hasError: boolean,
    errorInfo: Nullable<string>
}


class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    errorInfo: null
  }
  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, errorInfo: error.message }
  }

  public componentDidCatch(error: Error) {
    console.error('Uncaught fatal error:', error)
  }

  render() {
    if (this.state.hasError) {
      return <ErrorTemplate errorInfo={this.state.errorInfo as string}/>
    }

    return this.props.children
  }
}


export default ErrorBoundary
