import{_ as t,r as p,o as l,c,g as s,d as a,b as n,a as o}from"./app.308d8415.js";const w=JSON.parse('{"title":"Reactive properties","description":"","frontmatter":{},"headers":[{"level":2,"title":"Class Based","slug":"class-based","link":"#class-based","children":[]},{"level":2,"title":"Function Based","slug":"function-based","link":"#function-based","children":[]}],"relativePath":"components/reactive-properties.md","lastUpdated":1671441715000}'),r={name:"components/reactive-properties.md"},i=s("h1",{id:"reactive-properties",tabindex:"-1"},[a("Reactive properties "),s("a",{class:"header-anchor",href:"#reactive-properties","aria-hidden":"true"},"#")],-1),d=s("div",{class:"warning custom-block"},[s("p",{class:"custom-block-title"},"WARNING"),s("p",null,"Jwc only has reactive properties. It means that you can't define a reactive state in a component.")],-1),y=s("p",null,"Jwc components have reactive properties. These properties are automatically updated when the component is updated.",-1),D={class:"vp-code-group"},F={class:"tabs"},C=s("input",{type:"radio",name:"group-7myHD",id:"tab-FmfYHiA",checked:"checked"},null,-1),u=s("label",{for:"tab-FmfYHiA"},"Class Based",-1),h=s("input",{type:"radio",name:"group-7myHD",id:"tab-6oT3_n8"},null,-1),A={for:"tab-6oT3_n8"},_=s("input",{type:"radio",name:"group-7myHD",id:"tab-pV5Mbtz"},null,-1),m=s("label",{for:"tab-pV5Mbtz"},"index.html",-1),b=o(`<div class="blocks"><div class="language-tsx active"><button title="Copy Code" class="copy"></button><span class="lang">tsx</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">@</span><span style="color:#82AAFF;">JwcComponent</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">app-element</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#89DDFF;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">App</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">extends</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">JwcComponent</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">@</span><span style="color:#82AAFF;">Prop</span><span style="color:#A6ACCD;">() </span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">World</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C792EA;">override</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">render</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;{this.</span><span style="color:#A6ACCD;">name</span><span style="color:#89DDFF;">}&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;">// no yet implemented</span></span>
<span class="line"></span></code></pre></div><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">app-element</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">name</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">John</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">app-element</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div></div>`,1),v=o(`<h2 id="class-based" tabindex="-1">Class Based <a class="header-anchor" href="#class-based" aria-hidden="true">#</a></h2><p>In a class based component, you can define reactive properties by adding a <code>@Prop</code> decorator to a property.</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">@</span><span style="color:#82AAFF;">Prop</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">type</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> String</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">default</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">World</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">) </span><span style="color:#FFCB6B;">name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> string</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><p>The <code>@Prop</code> decorator takes an object with the following properties:</p><ul><li><code>type</code> - The type of the property. This is used to convert the property to the correct type. The default type is <code>string</code>.</li><li><code>default</code> - The default value of the property. This is used when the property is not set. The default value is <code>undefined</code>.</li></ul><p>To define the value of the property (like <code>name</code>) in html, you can use the <code>name</code> attribute.</p><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">app-element</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">name</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">John</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">app-element</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div>`,7),g={id:"function-based",tabindex:"-1"},f=s("a",{class:"header-anchor",href:"#function-based","aria-hidden":"true"},"#",-1),T=s("p",null,"Not yet implemented",-1);function B(k,x,E,N,q,P){const e=p("Badge");return l(),c("div",null,[i,d,y,s("div",D,[s("div",F,[C,u,h,s("label",A,[a("Function Based "),n(e,{text:"Not yet implemented",type:"danger"})]),_,m]),b]),v,s("h2",g,[a("Function Based "),n(e,{text:"Not yet implemented",type:"danger"}),a(),f]),T])}const S=t(r,[["render",B]]);export{w as __pageData,S as default};
