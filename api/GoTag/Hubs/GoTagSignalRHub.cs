using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Microsoft.AspNet.SignalR;
using Microsoft.AspNet.SignalR.Hubs;
using System.Threading;

namespace GoTag
{
    public class GoTagSignalRHub : Hub
    {
        public static bool IsEventStarted;

        public void CallStartEvent()
        {
            IsEventStarted = true;
            //if (!IsEventStarted)
            if(true)
            {
                // Call the broadcastMessage method to update clients.
                Clients.All.eventStartCountDown();
                for (int i = 30; i >= 0; i--)
                {
                    Thread.Sleep(1000);
                    Clients.All.eventStartCountDownUpdate(i);
                }
                Clients.All.startEvent();
            }
        }
    }
}