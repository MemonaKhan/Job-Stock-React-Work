import React from "react"
import MessageCard from './MessageCard'

import img1 from '../img/can-1.png'
import ClientData from '../data/client/Data'
import ClientMsg from '../data/client/Messages'

export default function ProfileMessage() {
    return (
        <>
            <div id="messages" class="tab-pane fade in active">
                <div class="inbox-body inbox-widget">
                    {
                        ClientMsg.map((val, key) => {
                            return (
                                // <>
                                    // {
                                        val.messages.map((m, k) => {
                                            return (
                                                <MessageCard
                                                    id={k}
                                                    img={m.img}
                                                    sender={m.sender}
                                                    senderemail={m.senderemail}
                                                    recieveremail={m.recieveremail}
                                                    day={m.day}
                                                    time={m.time}
                                                    read={m.read}
                                                    message={m.message}

                                                />
                                            )
                                        })
                                    // }

                                //     {/* <MessageCard
                                //         id={2}
                                //         img={val.messages[2].img}
                                //         sender={val.messages[2].sender}
                                //         senderemail={val.messages[2].senderemail}
                                //         recieveremail={val.messages[2].recieveremail}
                                //         day={val.messages[2].day}
                                //         time={val.messages[2].time}
                                //         read={val.messages[2].read}
                                //         message={val.messages[2].message}

                                //     />
                                //     <MessageCard
                                //         id={3}
                                //         img={val.messages[3].img}
                                //         sender={val.messages[3].sender}
                                //         senderemail={val.messages[3].senderemail}
                                //         recieveremail={val.messages[3].recieveremail}
                                //         day={val.messages[3].day}
                                //         time={val.messages[3].time}
                                //         read={val.messages[3].read}
                                //         message={val.messages[3].message}

                                //     />
                                //     <MessageCard
                                //         id={4}
                                //         img={val.messages[4].img}
                                //         sender={val.messages[4].sender}
                                //         senderemail={val.messages[4].senderemail}
                                //         recieveremail={val.messages[4].recieveremail}
                                //         day={val.messages[4].day}
                                //         time={val.messages[4].time}
                                //         read={val.messages[4].read}
                                //         message={val.messages[4].message}

                                //     /> */}
                                // // </>

                            )
                        })
                    }


                </div>
            </div>
        </>
    )
}
