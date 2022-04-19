import React from 'react'
import { UserContext, ChannelContext } from '../../App'

export const ComponentF = () => {
    return (
        <div>
            <UserContext.Consumer>
                {user => (
                    <ChannelContext.Consumer>
                        {channel => (
                            <div>
                                <p>User context value: <strong>{user}</strong></p>
                                <p>User context channel: <strong>{channel}</strong></p>
                            </div>
                        )}
                    </ChannelContext.Consumer>
                )}
            </UserContext.Consumer>
        </div>
    )
}
