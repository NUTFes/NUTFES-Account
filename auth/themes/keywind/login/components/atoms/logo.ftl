<#macro kw>
  <div class="font-bold text-center text-2xl">
    <#if properties.logos?has_content>
      <#list properties.logos?split(" ") as logo>
        <div>
          <img src="${url.resourcesPath}/${logo?split('==')[0]}" width='100' style='display: block; margin: auto;'>
        </div>
      </#list>
    <#else>
      <#nested>
    </#if>
  </div>
</#macro>
