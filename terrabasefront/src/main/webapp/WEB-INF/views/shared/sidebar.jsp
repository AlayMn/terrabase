
       
       
       
       
       
        <div id="sidebar-container" class="sidebar-expanded d-none d-md-block"><!-- d-* hiddens the Sidebar in smaller devices. Its itens can be kept on the Navbar 'Menu' -->
        <!-- Bootstrap List Group -->
        <ul class="list-group">
        
            <!-- Separator with title -->
            <!-- <li class="list-group-item sidebar-separator-title text-muted d-flex align-items-center menu-collapsed">
                <small>MAIN MENU</small>
            </li> -->
            
            
            <!-- /END Separator -->
            <!-- Menu with submenu -->
            
            <a href="#submenu1" data-toggle="collapse" aria-expanded="false" class="bg-dark list-group-item list-group-item-action flex-column align-items-start">
                <div class="d-flex w-100 justify-content-start align-items-center">
                    <span class="fa fa-dashboard fa-fw mr-3"></span> 
                    <span class="menu-collapsed">Inventory</span>
                    <span class="submenu-icon ml-auto"></span>
                </div>
            </a>
            
            <!-- Submenu content -->
            <div id='submenu1' class="collapse sidebar-submenu">
            <%-- 
             <li id="manageProducts">
                        <a href="${contextRoot}/manage/products">Manage Products</a>
                    </li> --%>
                    
                    
                    
                    
            
                <a href="${contextRoot}/manage/products" class="list-group-item list-group-item-action bg-dark text-white">
                    <span class="menu-collapsed">&nbsp;&nbsp;&nbsp;&nbsp;>Bricks</span>
                </a>
                <a href="#" class="list-group-item list-group-item-action bg-dark text-white">
                    <span class="menu-collapsed">&nbsp;&nbsp;&nbsp;&nbsp;>Pots</span>
                </a>
                <a href="#" class="list-group-item list-group-item-action bg-dark text-white">
                    <span class="menu-collapsed">&nbsp;&nbsp;&nbsp;&nbsp;>Others</span>
                </a>
            </div>
            
            <a href="#submenu2" data-toggle="collapse" aria-expanded="false" class="bg-dark list-group-item list-group-item-action flex-column align-items-start">
                <div class="d-flex w-100 justify-content-start align-items-center">
                    <span class="fa fa-user fa-fw mr-3"></span>
                    <span class="menu-collapsed">Expenses</span>
                    <span class="submenu-icon ml-auto"></span>
                </div>
            </a>
            <!-- Submenu content -->
            <div id='submenu2' class="collapse sidebar-submenu">
                <a href="#" class="list-group-item list-group-item-action bg-dark text-white">
                    <span class="menu-collapsed">Packing</span>
                </a>
                <a href="#" class="list-group-item list-group-item-action bg-dark text-white">
                    <span class="menu-collapsed">Transport</span>
                </a>
            </div>    
                    
            <a href="#" class="bg-dark list-group-item list-group-item-action">
                <div class="d-flex w-100 justify-content-start align-items-center">
                    <span class="fa fa-tasks fa-fw mr-3"></span>
                    <span class="menu-collapsed">Maintenance</span>    
                </div>
            </a>
            
            
            
            <!-- Separator with title -->
            <li class="list-group-item sidebar-separator-title text-muted d-flex align-items-center menu-collapsed">
                <small>Human Resource</small>
            </li>
            <!-- /END Separator -->
            <a href="#" class="bg-dark list-group-item list-group-item-action">
                <div class="d-flex w-100 justify-content-start align-items-center">
                    <span class="fa fa-calendar fa-fw mr-3"></span>
                    <span class="menu-collapsed">Salaries</span>
                </div>
            </a>
            <a href="#" class="bg-dark list-group-item list-group-item-action">
                <div class="d-flex w-100 justify-content-start align-items-center">
                    <span class="fa fa-envelope-o fa-fw mr-3"></span>
                    <span class="menu-collapsed">Advances <span class="badge badge-pill badge-primary ml-2">5</span></span>
                </div>
            </a>
            <!-- Separator without title -->
         <!--    <li class="list-group-item sidebar-separator menu-collapsed"></li>            
            /END Separator
            <a href="#" class="bg-dark list-group-item list-group-item-action">
                <div class="d-flex w-100 justify-content-start align-items-center">
                    <span class="fa fa-question fa-fw mr-3"></span>
                    <span class="menu-collapsed">Help</span>
                </div>
            </a>
            <a href="#" data-toggle="sidebar-colapse" class="bg-dark list-group-item list-group-item-action d-flex align-items-center">
                <div class="d-flex w-100 justify-content-start align-items-center">
                    <span id="collapse-icon" class="fa fa-2x mr-3"></span>
                    <span id="collapse-text" class="menu-collapsed">Collapse</span>
                </div>
            </a> -->
            <!-- Logo -->
           <!--  <li class="list-group-item logo-separator d-flex justify-content-center">
                <img src='https://v4-alpha.getbootstrap.com/assets/brand/bootstrap-solid.svg' width="30" height="30" />    
            </li>  -->  
        </ul><!-- List Group END-->
    </div><!-- sidebar-container END -->
       
       
              
              
          <%--     
              
      <div class="list-group">
  
  	<c:forEach items="${categories}"  var="category">
  	 <a href="${contextRoot}/show/category/${category.id}/products" class="list-group-item" id="a_${category.name}" >${category.name}</a>
      
  	
  	</c:forEach>
  
      
      </div>
                
                 --%>