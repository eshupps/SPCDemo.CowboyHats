<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Default.aspx.cs" Inherits="SPCDemo.CowboyHatsWeb.Pages.Default" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title>SharePoint Conference 2012 Autohosted App Demo</title>
    <link rel="stylesheet" type="text/css" href="../styles/jquery-ui-1.9.1.custom.css" />
    <link rel="stylesheet" type="text/css" href="../styles/jquery.galleryview-3.0-dev.css" />
    <link rel="stylesheet" type="text/css" href="../styles/demo.css" />
    <script type="text/javascript" src="../scripts/SP.RequestExecutor.js"></script>
    <script type="text/javascript" src="../scripts/sp.ui.controls.js"></script>
    <script type="text/javascript" src="../scripts/jquery-1.7.1.min.js"></script>
    <script type="text/javascript" src="../scripts/jquery-ui.min.js"></script>
    <script type="text/javascript" src="../scripts/jquery.galleryview-3.0-dev.js"></script>
    <script type="text/javascript" src="../scripts/jquery.easing.1.3.js"></script>
    <script type="text/javascript" src="../scripts/jquery.timers-1.2.js"></script>
    <script type="text/javascript" src="../scripts/demo2.js"></script>
</head>
<body>
    <form id="form1" runat="server">
    <div class="main">
        <div id="chrome_ctrl_container" ></div>
        <div id="content" class="content">
            <ul id="gallery"></ul>
        </div>
        <asp:HiddenField ID="valRootUrl" runat="server" />
    </div>
    <script type="text/javascript">
        $(document).ready(function () {
            initializePage();
        });
    </script>
    </form>
</body>
</html>
