using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Text;
using System.Threading.Tasks;
using System.IO;

namespace Hakaton_bot
{
    public class GetRequest
    {
        HttpWebRequest _request;
        string _link;
        public string Response { get; set; }
        public GetRequest(string link)
        {
            this._link = link;
        }
        public void Run()
        {
            try
            {
                _request = (HttpWebRequest)WebRequest.Create(_link);
                _request.Method = "GET";
                HttpWebResponse response = (HttpWebResponse)_request.GetResponse();
                var sream = response.GetResponseStream();
                if (sream != null) Response = new StreamReader(sream).ReadToEnd();
                Console.WriteLine(Response);
            }
            catch (Exception)
            { 
            }
            
        }
    }
}

