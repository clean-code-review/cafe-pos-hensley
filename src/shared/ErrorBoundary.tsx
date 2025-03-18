import { Component, ErrorInfo, ReactNode } from 'react'

interface ErrorBoundaryProps {
  children: ReactNode
  fallback?: ReactNode
  onError?: (error: Error, errorInfo: ErrorInfo) => void
}

interface ErrorBoundaryState {
  hasError: boolean
  error: Error | null
}

export class ErrorBoundary extends Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props)
    this.state = {
      hasError: false,
      error: null,
    }
  }

  static getDerivedStateFromError(
    error: Error,
  ): ErrorBoundaryState {
    return {
      hasError: true,
      error,
    }
  }

  componentDidCatch(
    error: Error,
    errorInfo: ErrorInfo,
  ): void {
    // 에러 로깅 서비스에 오류 보고
    console.error(
      'ErrorBoundary caught an error',
      error,
      errorInfo,
    )
    this.props.onError?.(error, errorInfo)
  }

  render(): ReactNode {
    if (this.state.hasError) {
      // 사용자 정의 폴백 UI 또는 기본 오류 메시지
      return (
        this.props.fallback || (
          <div className="error-ui">
            <h2>앗! 문제가 발생했습니다.</h2>
            <p>
              페이지에 오류가 발생했습니다. 잠시 후 다시
              시도해주세요.
            </p>
            <button
              onClick={() =>
                this.setState({
                  hasError: false,
                  error: null,
                })
              }
            >
              다시 시도
            </button>
          </div>
        )
      )
    }

    return this.props.children
  }
}
