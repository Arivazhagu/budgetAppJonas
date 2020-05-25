<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="budgetApp2.aspx.cs" Inherits="udeBootOvrAsp.budgetApp2" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title>Budget App</title>
    <link href="Content/bootstrap.css" rel="stylesheet" />
    <link href="https://fonts.googleapis.com/css?family=Lato&display=swap" rel="stylesheet" />
    <link href="Content/font-awesome.css" rel="stylesheet" />
    <link href="budgetAppStyles.css" rel="stylesheet" />
</head>
<body>
    <div class=" container-fluid">
        <div class="row topHalf">
            <div class="col-12 bg-info h-50 topElements">
                <div class="row w-50 mx-auto h-75 rounded gradientStyle">
                    <div class=" col-12">
                        <label class="w-100 text-center" id="currentMonth" style="font-variant:small-caps"></label>
                    </div>
                    <div class="col-12">
                        <label class="w-100 text-center costLabel" id="globalBalance">+ 0.00</label>
                    </div>
                    <div class="col-12  justify-content-center">
                        <%-- Justify content works when it is used in Row and their respective columns --%>
                        <div class="row justify-content-center h-100">
                            <div class="w-50 text-white rounded inputHeights d-flex align-items-center" id="income">
                                <div class="row w-100 d-flex align-items-center">
                                    <div class="col-5">INCOME</div>
                                    <div class="col-4 border rounded d-flex align-items-center">
                                        <span class="font-weight-bold">+</span>
                                        <label id="totalIncome" class="m-0">0</label>
                                    </div>
                                    <div class="col-2"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-12">
                        <div class="row justify-content-center h-100">
                            <div class="w-50 text-white rounded inputHeights  d-flex align-items-center spendings" id="">
                                <div class="row w-100 d-flex align-items-center">
                                    <div class="col-5">EXPENSES</div>
                                    <div class="col-4 border rounded d-flex align-items-center">
                                        <span class="font-weight-bold mr-1">-</span>
                                        <label id="totalExpenses" class="m-0">0</label>
                                    </div>
                                    <div class="col-3">
                                        <label id="expensePercent" class="border rounded mb-0 px-2" style="">
                                            0.0%
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-12">
                        <div class="row">
                            <div class="col-2">
                                <select class="form-control font-weight-bold">
                                    <option value="value">+</option>
                                    <option value="value">-</option>
                                </select>
                            </div>
                            <div class="col-6">
                                <input type="text" id="descEntered" name="name" value="" class="w-100 form-control" placeholder="Add description" />
                            </div>
                            <div class="col-2">
                                <input type="text" id="amountEntered" name="name" value="" class="w-100 form-control" placeholder="Value" />
                            </div>
                            <div class="col-2"><i id="enterValue" class="fa fa-check-circle"></i></div>

                        </div>
                    </div>
                </div>
            </div>

            <div class="col-12 bg-white h-50">
                <div class="container mt-5 w-50 mx-auto">
                    <div class="row">
                        <div class="col-6">
                            <div id="incomeList" class="addedElement">INCOME</div>                            
                        </div>
                        <div class="col-6">
                           <div id="expenseList" class="addedElement">EXPENSES</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <script src="budgetAppArchitect.js"></script>
    <%--<script src="Scripts/jquery-3.0.0.js"></script>--%>
    <%--<script src="Scripts/popper.js"></script>--%>
    <script src="Scripts/bootstrap.js"></script>
</body>
</html>
