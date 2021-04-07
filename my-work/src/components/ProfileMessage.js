import React from "react"
import MessageCard from './MessageCard'

import img1 from '../img/can-1.png'
import ClientData from '../data/client/Data'

export default function ProfileMessage() {
    return (
        <>
            <div id="messages" class="tab-pane fade in active">
                <div class="inbox-body inbox-widget">
                    <MessageCard
                        img={img1}
                        sender={ClientData[0].messages[0].sender}
                        senderemail={ClientData[0].messages[0].senderemail}
                        recieveremail={ClientData[0].messages[0].recieveremail}
                        day={ClientData[0].messages[0].day}
                        time={ClientData[0].messages[0].time}
                        read={ClientData[0].messages[0].read}
                        message={ClientData[0].messages[0].message}

                    />

                    <MessageCard
                        img={img1}
                        sender={ClientData[0].messages[0].sender}
                        senderemail={ClientData[0].messages[0].senderemail}
                        recieveremail={ClientData[0].messages[0].recieveremail}
                        day={ClientData[0].messages[0].day}
                        time={ClientData[0].messages[0].time}
                        read={ClientData[0].messages[0].read}
                        message={ClientData[0].messages[0].message}

                    />
                    <MessageCard
                        img={img1}
                        sender={ClientData[0].messages[0].sender}
                        senderemail={ClientData[0].messages[0].senderemail}
                        recieveremail={ClientData[0].messages[0].recieveremail}
                        day={ClientData[0].messages[0].day}
                        time={ClientData[0].messages[0].time}
                        read={ClientData[0].messages[0].read}
                        message={ClientData[0].messages[0].message}

                    />
                    <MessageCard
                        img={img1}
                        sender={ClientData[0].messages[0].sender}
                        senderemail={ClientData[0].messages[0].senderemail}
                        recieveremail={ClientData[0].messages[0].recieveremail}
                        day={ClientData[0].messages[0].day}
                        time={ClientData[0].messages[0].time}
                        read={ClientData[0].messages[0].read}
                        message={ClientData[0].messages[0].message}

                    />
                </div>
            </div>
        </>
    )
}
