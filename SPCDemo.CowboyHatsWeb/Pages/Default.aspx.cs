using System;
using Microsoft.SharePoint.Client;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace SPCDemo.CowboyHatsWeb.Pages
{
    public partial class Default : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            var spContext = SharePointContextProvider.Current.GetSharePointContext(HttpContext.Current);
            using (var appContext = spContext.CreateUserClientContextForSPAppWeb())
            {
                if (appContext != null)
                {
                    Web appWeb = appContext.Web;
                    appContext.Load(appWeb);
                    appContext.ExecuteQuery();
                }
            }
        }
    }
}